import { createClient, groq } from "next-sanity"



export  async function getProducts(){
    const client = createClient({
        projectId : "68id7anl",
        dataset: "production",
        apiVersion: "2023-11-12",
    })

    return    client.fetch(
        groq`*[_type == "product"]{
            _id,
            _createdAt,
            name,
            "slug" : slug.current,
            "image" : image.asset->url,
            description,
        }`
    )
}