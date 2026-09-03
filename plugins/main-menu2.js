const handler = async (m, { conn }) => {
  await conn.reply(m.chat, 'Hola Mundo 👋', m);
};

handler.help = ['holamundo'];
handler.tags = ['main'];
handler.command = /^(menu|menus)$/i;

export default handler;
