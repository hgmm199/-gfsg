import discord
from discord.ext import commands

intents = discord.Intents.default()
bot = commands.Bot(command_prefix="!", intents=intents)

@bot.event
async def on_ready():
    stream = discord.Streaming(
        name="with 4,416,429 souls",
        url="https://twitch.tv/yourstream",
    )
    await bot.change_presence(activity=stream)
    print(f"Bot đã đăng nhập: {bot.user}")

bot.run("MTM3OTY2NTYwNDM5ODU0Njk5NA.G04Jue.3rKU4bvw688RwjGuYdkKUeE_xnANYmWBTOhm_8")
