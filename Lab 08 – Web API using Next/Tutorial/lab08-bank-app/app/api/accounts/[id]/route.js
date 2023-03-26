export async function GET(request, { params }) {
    const { id } = params
    return new Response('Hello, I am the accounts route with ID!' + id)
}