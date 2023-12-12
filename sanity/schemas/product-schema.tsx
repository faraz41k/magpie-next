const products = {
    name: 'product',
    title : 'Products',
    type : 'document',
    fields : [
       {
        name: 'name',
        title: 'Name',
        type: 'string'
       },

       {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {source: 'name'}
       },

       {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {hotspot: true},
        fields: [
            {
                name: 'alt',
                title: 'Alt',
                type: 'string',
            }
        ]
       },

       {
        name: 'url',
        title: 'URL',
        type: 'url'
       },

       {
        name: 'description',
        title: 'Description',
        type: 'array',
        of: [{type: "block"}]
       },

       {
        name: 'itinerary',
        title: 'Itinerary at a glance',
        type: 'array',
        of: [{type: "block"}]
       },

       {
        name: 'serviceIncluded',
        title: 'Services Included',
        type: 'array',
        of: [{type: "block"}]
       },

       {
        name: 'notes',
        title: 'Notes for trip',
        type: 'array',
        of: [{type: "block"}]
       },

       {
        name: 'serviceNotIncluded',
        title: 'Services Not Included',
        type: 'array',
        of: [{type: "block"}]
       },

       {
        name: 'BookingPolicy',
        title: 'Booking Policies',
        type: 'array',
        of: [{type: "block"}]
       },

       {
        name: 'RefundPolicy',
        title: 'Refund policy',
        type: 'array',
        of: [{type: "block"}]
       },

       


    ]
}


export default products;