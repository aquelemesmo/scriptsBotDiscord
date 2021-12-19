local discordia = require('discordia')

return {
    name = 'ping',
    aliases = 'ms',
    commandRun = function(bot, msg, args, rest)
        msg.channel:send("Pong!")
    end
}