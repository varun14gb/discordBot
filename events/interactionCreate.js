const { Role } = require('discord.js');

const wait = require('node:util').promisify(setTimeout);

module.exports = {
    name: 'interactionCreate',
    async execute(interaction) {
        try {
            if (!interaction.isCommand()) return;

            if (interaction.commandName === 'makehero') {

                await interaction.member.guild.roles.create({
                    data: {
                        name: 'Spiderman',
                        color: 'RED',
                    },
                    reason: 'With Great Power Comes Great Responsibilty!',
                })
                await interaction.reply(`${user.username} has been promoted to the role Spiderman`);
            }

        } catch (e) {
            console.error(e);
        }
    },
};