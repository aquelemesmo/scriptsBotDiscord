--messageCreate event
--Linguagem usada: lua
--Author: aquelemesmoojack#4306

client.on('messageCreate', function(msg)
    if (not string.startsWith(msg.content, settings.Prefix)) then
		return;
	end

	if (not msg.author) then
		return;
	end

	if (msg.author.bot == bot.user.id) then
		return;
	end

	if (msg.author.bot) then
		return;
	end

	local suc, err = pcall(function()
		commandRun(msg)
	end)

	if not suc then
		print(err)
		msg.channel:send("Ocorreu um erro, tente mais tarde")
	end
end)