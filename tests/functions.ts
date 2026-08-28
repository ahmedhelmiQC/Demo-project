function buildLoginMessage (username: string , success: boolean) : string
{
    return success ? `${username} singed in ` : ` ${username} could mot sign in `;
}