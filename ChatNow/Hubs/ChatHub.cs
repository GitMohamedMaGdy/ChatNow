using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace ChatNow.Hubs
{
    public class ChatHub : Hub
    {

        public async Task SendMessage(string from, string message)
        {
            await Clients.All.SendAsync("RecieveMessage", from, message);
        }
    }
}
