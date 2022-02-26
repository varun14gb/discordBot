const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('removehero')
        .setDescription('Remove you from Spiderman Role!'),
    async execute(interaction) {
        await interaction.reply('Remove');
    }
};