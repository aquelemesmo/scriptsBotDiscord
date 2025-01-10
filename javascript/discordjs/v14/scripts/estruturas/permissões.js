//Estrutura permissões
//Versão: Discord.JS v14
//Linguagem usada: js
//Author: aquelemesmoojack

// Editar permissão no canal

channel.permissionOwerwrites.edit(interaction.guild.id, {ViewChannel: false}) //vai editar a permissão que o @everyone não vão ter acesso de ver o canal

channel.permissionOwerwrites.edit(interaction.guild.id, {ViewChannel: true}) //vai editar a permissão que o @everyone vão ter acesso de ver o canal

// Setar permissão no canal

channel.permissionOwerwrites.set([
    {
        id: interaction.guild.id, //todos os membros
        allow: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessage] //permissões que o @everyone vai ter
    },
    {
        id: interaction.guild.id, //todos os membros
        deny: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessage] //permissões que o @everyone não vai ter
    },
])

// Deletar permissão no canal

channel.permissionOwerwrites.delete(interaction.guild.id) //vai deletar as permissões do @everyone

// TODAS AS PERMISSÕES PARA CANAIS DE TEXTOS, VOZES, THREADS entre outros:

// AddReactions - Adicionar reações
// Administrator - Administrador
// AttachFiles - Anexar arquivos
// BanMembers - Banir membros
// ChangeNickname - Alterar apelido
// Connect - Conectar
// CreateInstantInvite - Criar convite instantâneo
// DeafenMembers - Silenciar membros
// EmbedLinks - Inserir links
// ExternalEmojis - Usar emojis externos
// KickMembers - Expulsar membros
// ManageChannels - Gerenciar canais
// ManageEmojisAndStickers - Gerenciar emojis e figurinhas
// ManageEvents - Gerenciar eventos
// ManageGuild - Gerenciar servidor
// ManageMessages - Gerenciar mensagens
// ManageNicknames - Gerenciar apelidos
// ManageRoles - Gerenciar cargos
// ManageThreads - Gerenciar tópicos
// ManageWebhooks - Gerenciar webhooks
// MentionEveryone - Menção @everyone, @here e todos os cargos
// MoveMembers - Mover membros
// MuteMembers - Silenciar membros
// PrioritySpeaker - Prioridade de fala
// ReadMessageHistory - Ver histórico de mensagens
// RequestToSpeak - Solicitar fala
// SendMessages - Enviar mensagens
// SendTTSMessages - Enviar mensagens com TTS
// Speak - Falar no canal de voz
// Stream - Transmitir no canal de voz
// UseApplicationCommands - Usar comandos de aplicativos
// UseEmbeddedActivities - Usar atividades embutidas
// UseExternalEmojis - Usar emojis externos
// UseExternalStickers - Usar figurinhas externas
// UsePrivateThreads - Usar tópicos privados
// UsePublicThreads - Usar tópicos públicos
// UseVAD - Usar detecção de voz
// ViewAuditLog - Ver registro de auditoria
// ViewChannel - Ver canal
// ViewGuildInsights - Ver análises do servidor