export const Stores: Store[] = [
    {
        id: 1,
        title: "Default Store",
        image: "https://fakeimg.pl/600x400",
        description: "This is our first store located in San Francisco.",
        location: "Mapple Street 3113",
        status: true,
        employees: 5,
        calification: 4.5
    },
    {
        id: 2,
        title: "New York Store",
        image: "https://fakeimg.pl/600x400",
        description: "This is our New York store.",
        location: "4th Av. 1234",
        status: true,
        employees: 2,
        calification: 5
    },
    {
        id: 3,
        title: "Example Store",
        image: "https://fakeimg.pl/600x400",
        description: "This is an example store, located in Canada.",
        location: "Ocean View 9876",
        status: false,
        employees: 1,
        calification: 4
    },
    {
        id: 4,
        title: "Online Store",
        image: "https://fakeimg.pl/600x400",
        description: "This is an online store, is has no location.",
        status: false,
        employees: 1,
        calification: 5
    },
    {
        id: 5,
        title: "Default Store",
        image: "https://fakeimg.pl/600x400",
        description: "This is our first store located in San Francisco.",
        location: "Mapple Street 3113",
        status: true,
        employees: 5,
        calification: 4.5
    },
    {
        id: 6,
        title: "New York Store",
        image: "https://fakeimg.pl/600x400",
        description: "This is our New York store.",
        location: "4th Av. 1234",
        status: true,
        employees: 2,
        calification: 5
    },
    {
        id: 7,
        title: "Example Store",
        image: "https://fakeimg.pl/600x400",
        description: "This is an example store, located in Canada.",
        location: "Ocean View 9876",
        status: false,
        employees: 1,
        calification: 4
    },
    {
        id: 8,
        title: "Online Store",
        image: "https://fakeimg.pl/600x400",
        description: "This is an online store, is has no location.",
        status: false,
        employees: 1,
        calification: 5
    },
]


export interface Store {
    id: Number
    title: string
    image: string
    description: string
    location?: string
    status: Boolean
    employees: Number
    calification: Number
}

export interface User {
    id: Number
    name: string
    email: string
    address: Address,
    phone: string,
    website: string,
}

export interface Address {
    street: string
    suite: string,
    city: string,
    zipcode: string,
    geo: Geolocalization
}

export interface Geolocalization {
    lat: string
    lng: string
}