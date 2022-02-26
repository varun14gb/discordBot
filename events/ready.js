module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        try {
            const guilds = await client.guilds.fetch();
            guilds.forEach(async (guild) => {
                const normalguild = await guild.fetch();
                const roles = await normalguild.roles.fetch();
                let exists = false;
                roles.forEach(role => {
                    if (role.name === 'Spiderman') {
                        exists = true;
                    }
                });
                if (!exists) {
                    await normalguild.roles.create({
                        name: "Spiderman",
                        color: "BLUE"
                    })
                }
                console.log(`Created new role with name Spiderman`)
            });

            console.log(`Ready! Logged in as ${client.user.tag}`);

        } catch (e) {
            console.error(e);
            await interaction.reply('Some Error occured!');
        }
    },
};