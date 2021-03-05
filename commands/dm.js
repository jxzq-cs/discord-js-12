// This command lets the author dm the mentioned user anything they want with the bot.

module.exports = {
    name: 'dm',
    description: 'dms the mentioned user your message.',
    execute(message, args) {
        let member = message.mentions.members.first() || message.member
        let bully = args.join(" ").slice(22);

        message.delete(message.author) // Deletes the message the author sent.
        if(!member) return message.author.send("**Please mention someone to dm!**") // If the author  does not mention someone the bot will ask the author to mention someone next time they try this command.
        if(!bully) return message.author.send("Please specify what to send to the mentioned user when sending the **DM** command") // This is sent if the author does not specify what he wants to be sent to the mentioned user.
        member.createDM(message.author.send(bully)) // The bot sends what the author said to the mentioned user.
    }
}