
module.exports = {
    tags: ['others', 'information'],
    cmd: ['menu', 'menu'],
    help: ['menu'],
    exec: (m, client, { prefix }) => {

const btn = [
            
           
            { urlButton: { displayText: `ππ€π¨π©ππ£π `, url: `https://jsrepos.com/lib/Ilhamskhyi-catzy` } },
 { urlButton:
{ displayText: `πππ©ππͺπ `, url: `https://github.com/Ilhamskhyi` } },
 { urlButton:
{ displayText: `πππ«ππ‘π€π₯ππ§ `, url: `developer atau pengembang bot https://wa.me/+6287773710155` } },
             { quickReplyButton: {displayText: 'πππ¨π© π§ππ¨π₯π€π£π ππ€π©', id: '.ping '}},
{ quickReplyButton: {displayText: 'ππ€π’π’ππ£πππ§ ', id: '.allmenu'}}
        ]
        client.sendMessage(m.chat, { 
			caption: `ππππ£π’ - πππ πππππ ππππππ
ββββββββββββ
β πππππππ‘

γversion 0.5.1γ
β πππππ’ππ ππππππβ΄β°β΄ β`, 
			footer, 
			templateButtons: btn,
			image: {url: 'https://telegra.ph/file/7b0e8623615268a38f2fe.jpg'}
		}, { quoted: m })
}
}
