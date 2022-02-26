const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('makehero')
        .setDescription('Assign Spiderman Role to you!'),
    async execute(interaction) {
        await interaction.reply('Spiderman');
    }
};