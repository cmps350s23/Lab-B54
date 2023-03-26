export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type')
    console.log(searchParams);
    return new Response('Hello, I am the accounts route!' + type)
}

export async function POST(request) {
    const account = await request.json()
    console.log(account);
    return new Response('Thanks for posting a new account!')
}