container = document.querySelector("#container");
code = document.querySelector("#cmd")
textarea = document.querySelector("#textarea")


const cmdtext = 'user@zongi-os: ~$ ';
const cmdtext2 = 'user@zongi-os: ~$ ';

var static = "Welcome to the Zongi OS!";
static += '\nType "help" to get started!'
static += "\n------------------------------\n"
var previous = static+cmdtext;

setInterval(() => {
    var value = textarea.value;
    if(value != previous) 
    {
        if(!value.startsWith(static+cmdtext))
        {
            console.log(value);
            console.log(previous);
            if(previous[0] == '\n') previous[0] = '';
            if(previous[0] == '\n') previous[0] = '';
            textarea.value = previous
        }
        previous = textarea.value;
    }
}, 100);


function enter()
{
    console.log('Enter');
    var n = static.length + cmdtext.length;
    static += cmdtext2+textarea.value.substring(n)
    
    var command = textarea.value.substring(n);
    
    if(command != '')
    {
        var cmdArray = command.split(' ');
        if(cmdArray[0] == 'help')
        {
            static += '\nAvaliable commnads:'
            static += '\nhelp - display this list'
            static += '\nclear - clear the screen'
            static += '\nls - list current directory'
            static += '\ncat - display content of file'
            static += '\ninfo - get basic information about OS:'
        }
        else if(cmdArray[0] == 'ls') 
        {
            var addition = ''
            if(cmdArray[1] == '-a') addition = '.secret.txt'
            static += '\nmain.txt aboutme.txt programming.txt contact.txt '+addition
        }
        else if(cmdArray[0] == 'clear') 
        {
            static = ''
        }
        else if(cmdArray[0] == 'cat')
        {
            if(cmdArray[1])
            {
                if(cmdArray[1] == 'main.txt')
                {
                    static += '\n-------------------------------';
                    static += '\nHi!';
                    static += '\nWelcome to my interactive website :)';
                    static += '\nYou can move across this page with help of commands,';
                    static += '\nwhich you arleady did if you are reading this.';
                    static += '\n';
                    static += '\nI`m planning on upgrading this webiste, adding a bit of colors and a few secrets :)';
                    static += '\nEnjoy browsing!';
                    static += '\n-------------------------------';
                }
                else if(cmdArray[1] == 'aboutme.txt')
                {
                    static += '\n-------------------------------';
                    static += '\nHello!';
                    static += '\nIn the internet im known as Zongi,';
                    static += '\nBut my real name is ^#%{stdout::err}%^$!';
                    static += '\n';
                    static += '\nI`m a passionate programmer and ethical hacking novice.';
                    static += '\nI`m also a minecraft redstone engineer, and server creator aswell.';
                    static += '\nI really like competitions and Game Development :)';
                    static += '\n';
                    static += '\nI took part in several Game Jams, plain Coding competitions and Capture The Flag events.';
                    static += '\n';
                    static += '\nMore personally, i`m an introvert, i prefer being and doing stuff by myself.';
                    static += '\nIf you want to contact me, you can search for more info on contact page.';
                    static += '\n-------------------------------';
                }
                else if(cmdArray[1] == 'programming.txt')
                {
                    static += '\n-------------------------------';
                    static += '\nIn this file you can view all programming languages that i know';
                    static += '\nThe list goeas from languages that i know the best, to these i can barelu write anything in';
                    static += '\n';
                    static += '\n- C#';
                    static += '\n- C++';
                    static += '\n- Python';
                    static += '\n- Java';
                    static += '\n- JavaSctipt';
                    static += '\n- PHP';
                    static += '\n- Assembly';
                    static += '\n- Brainfuck';
                    static += '\n-------------------------------';
                }
                else if(cmdArray[1] == 'contact.txt')
                {
                    static += '\n-------------------------------';
                    static += '\nOh, so you want to contact me?';
                    static += '\n';
                    static += '\nI use Discord mostly, so it`s most likely you`ll find me there';
                    static += '\nBut unfortunately, as i said in aboutme file, i`m an introvert';
                    static += '\nSo you have very little chance that you will ever reach me ;P';
                    static += '\n';
                    static += '\nYou need to search for my Discord tag on your own ;)';
                    static += '\n-------------------------------';
                }
                else if(cmdArray[1] == '.secret.txt')
                {
                    static += '\n-------------------------------';
                    static += '\nCongratulations! You found the secret :)';
                    static += '\n';
                    static += '\nI might host a Capture The Flag event in the future';
                    static += '\nBut for now... here`s an completly useless flag :P';
                    static += '\n';
                    static += '\nflag{y0u_f0und_th3_s3cr3t}'; 
                    //in fact thats really weak secret XD
                    static += '\n-------------------------------';
                }
                else
                {
                    static += '\nFile not found.';
                }
            }
            else
            {
                static += '\nArgument missing: <path>';
            }
        }
        else 
        {
            static += '\nUnknown command: '+cmdArray[0];
            static += '\nType "help" for a list of commands'
        }
    }
    else if(cmdArray[0] == 'info') 
    {
        static += '\n-------------------------------';
        static += '\nWork In Prograss.';
        static += '\n-------------------------------';
    }
    else
    {
        static += '\nType "help" for a list of commands'
    }
    
    
    static+='\n\n'

    if(static == '\n\n') static='';
    previous = static+cmdtext;
    textarea.value = previous;
    console.log(n)
}