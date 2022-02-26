module.exports = {
    name: 'interactionCreate',
    async execute(interaction) {
        try {
            if (!interaction.isCommand()) return;

            if (interaction.commandName === 'makehero') {

                let role = interaction.guild.roles.cache.find(role => role.name === "Spiderman");

                await interaction.member.roles.add(role);

                await interaction.reply(`${interaction.user.username}#${interaction.user.discriminator} has been promoted to role Spiderman`);
            }
            else if (interaction.commandName === 'removehero') {

                const role = interaction.guild.roles.cache.find(role => role.name === "Spiderman");

                await interaction.member.roles.remove(role);

                await interaction.reply(`${interaction.user.username}#${interaction.user.discriminator} has been removed from role Spiderman`);
            }
            else {
                await interaction.reply('Invalid Command!');
            }

        } catch (e) {
            console.error(e);
            await interaction.reply('Some Error occured!');
        }
    },
};