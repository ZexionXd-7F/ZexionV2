module.exports = {
    tags: ['others', 'information'],
    cmd: ['donasi', 'donasi'],
    help: ['donasi'],
    exec: (m, client, { prefix }) => {
      
 const btn = [
            
            { urlButton: { displayText: `πΏπΌππΌ`, url: ` https://link.dana.id/qr/5hf4vyfw` } },
            { urlButton: { displayText: `ππππΌπ`, url: `QR gopay silahkan scan untuk mengakses ` } },
            { urlButton: { displayText: `πππππΌ `, url: `http://wa.me/+628773710155` } },
        ]
        client.sendMessage(m.chat, { 
			caption: `Kalian bisa mendukung saya agar bot ini tetap up to date dengan

πΏπππΌππ πππΌ β’
β₯ ππππΌπ
β₯ πΏπΌππΌ
β₯ πππππππππ½ππ
β ππππ β ππππ π½πππππ πππ`, 
			footer, 
			templateButtons: btn,
			image: {url: 'https://telegra.ph/file/3775b11fedf471914d3de.jpg'}
		}, { quoted: m })
}}
