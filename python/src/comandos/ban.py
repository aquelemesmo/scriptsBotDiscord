# Command ban
# Exemplo: !ban
# Linguagem usada: python
# Author: LabNegro (Sl4ker)

# Banimento diretamente sem canal especifico

import discord
from discord.ext import commands

@bot.command()
@commands.guild_only()
@commands.has_guild_permissions(ban_members=True)
@commands.bot_has_guild_permissions(ban_members=True)
async def ban(ctx, member: discord.Member):
    # para o comando ficar completo, você precisa fazer o on_command_error
    # para caso o comando seja usado no dm, ou a pessoa não passar nada, ou ser usado
    # por alguém que não tenha permissão, o bot tenha uma resposta
    # veja mais sobre o on_command_error em
    # https://gist.github.com/EvieePy/7822af90858ef65012ea500bcecf1612
 
    if ctx.guild.owner == member:
        # se a pessoa tentar banir o dono do servidor:
        return await ctx.send(f'{ctx.author.mention} você não pode banir o dono do servidor!')
    elif member == ctx.author:
        # se a pessoa tentar se banir
        return await ctx.send(f'{ctx.author.mention} você não pode se banir!')
    elif member == ctx.guild.me:
        # se a pessoa tentar banir o bot
        return await ctx.send(f'{ctx.author.mention} eu não posso me banir!')
    elif ctx.author.top_role <= member.top_role:
        # se a pessoa tentar banir alguém com o cargo mais alto que ela
        return await ctx.send(f'{ctx.author.mention} você só pode banir pessoas que tenham cargo mais baixo que o seu!')
    # se chegou até aqui, é porque não passou pelos return's acima
    try:
        # vai tentar banir o usuário
        await ctx.guild.ban(member)
    except discord.errors.Forbidden:
        # esse erro, é quando o bot não tem permissão para banir o membro
        # isso acontece, quando o membro tem um cargo maior do que o bot
        return await ctx.send(f'{ctx.author.mention} eu não tenho permissão para banir este usuário!')
    except discord.HTTPException as e:
        # se aconteceu algum outro erro
        return await ctx.send(f'{ctx.author.mention} ocorreu o erro ```{e}```ao tentar banir o usuário, tente novamente.')
    # se não passou pelos except's
    else:
        await ctx.send(f'{ctx.author.mention} usuário banido!')
 