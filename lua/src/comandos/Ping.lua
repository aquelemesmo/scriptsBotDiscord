--Ping command
--Exemplo: !ping
--Linguagem usada: lua
--Author: aquelemesmoojack#4306

return {
    name = 'ping',
    aliases = 'ms',
    commandRun = function(bot, msg, args, rest)
        msg.channel:send("Pong!")
    end
}
