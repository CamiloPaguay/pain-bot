import { execSync } from 'child_process';

const DEFAULT_REPO = 'https://github.com/CamiloPaguay/pain-bot';

const handler = async (m, { conn, text }) => {
  try {
    let repoUrl = DEFAULT_REPO;
    let branch = '';

    if (m.fromMe && text) {
      const args = text.trim().split(/\s+/);
      repoUrl = args[0] || DEFAULT_REPO;
      branch = args[1] || '';
    }

    let gitCommand = `git pull ${repoUrl}`;
    if (branch) gitCommand += ` ${branch}`;

    const stdout = execSync(gitCommand, { stdio: ['pipe', 'pipe', 'pipe'] });
    let messager = stdout.toString();

    if (messager.includes('Already up to date.')) {
      messager = '✅ El bot ya está actualizado.';
    } else if (messager.includes('Updating') || messager.includes('Fast-forward')) {
      messager = '🔄 *Bot actualizado correctamente:*\n\n' + stdout.toString();
    }

    messager = `*Repositorio:* ${repoUrl}${branch ? `\n*Rama:* ${branch}` : ''}\n\n${messager}`;

    conn.reply(m.chat, messager, m);
  } catch (error) {
    try {
      const status = execSync('git status --porcelain');
      if (status.length > 0) {
        const conflictedFiles = status
          .toString()
          .split('\n')
          .filter(line => line.trim() !== '')
          .map(line => {
            if (
              line.includes('.npm/') ||
              line.includes('.cache/') ||
              line.includes('tmp/') ||
              line.includes('session/') ||
              line.includes('npm-debug.log')
            ) {
              return null;
            }
            return '*→ ' + line.slice(3) + '*';
          })
          .filter(Boolean);

        if (conflictedFiles.length > 0) {
          const errorMessage = `⚠️ Hay archivos en conflicto que impiden la actualización:\n\n${conflictedFiles.join('\n')}`;
          await conn.reply(m.chat, errorMessage, m);
          return;
        }
      }

      let errorMessage2 = '❌ Ocurrió un error al actualizar el bot.';
      if (error.message) {
        errorMessage2 += '\n*- Mensaje de error:* ' + error.message;
      }
      await conn.reply(m.chat, errorMessage2, m);
    } catch (error2) {
      console.error(error2);
      let errorMessage2 = '❌ Ocurrió un error al actualizar el bot.';
      if (error2.message) {
        errorMessage2 += '\n*- Mensaje de error:* ' + error2.message;
      }
      await conn.reply(m.chat, errorMessage2, m);
    }
  }
};

handler.help = ['update [url-repo] [rama]'];
handler.tags = ['owner'];
handler.command = /^(update|actualizar|gitpull)$/i;
handler.rowner = true;

export default handler;
