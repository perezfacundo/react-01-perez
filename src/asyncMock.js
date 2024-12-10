const products = [
    {
        id: '1',
        name: 'Tita',
        price: 500,
        category: 'chocolates',
        img: 'https://jumboargentina.vtexassets.com/arquivos/ids/698579/11860501022.jpg?v=637871795980630000',
        stock: 25,
        description: '18g, Terrabusi'
    },
    {
        id: '2',
        name: 'Rhodesia',
        price: 600,
        category: 'chocolates',
        img: 'https://http2.mlstatic.com/D_NQ_NP_725540-MLA74074060794_012024-O.webp',
        stock: 50,
        description: '22g, Terrabusi'
    },
    {
        id: '3',
        name: 'Mantecol 26g',
        price: 600,
        category: 'chocolates',
        img: 'https://www.georgalosdistribuidor.com/wp-content/uploads/2022/07/jpeg-optimizer_3D-Mantecol-Clasico-26g-Sellos-2023_0002.png',
        stock: 10,
        description: 'Mondelez'
    },
    {
        id: '4',
        name: 'Tivis',
        price: 1100,
        category: 'chocolates',
        img: 'https://acdn.mitiendanube.com/stores/003/079/899/products/tivis-290b7e82914cedac7317107138832255-640-0.jpg',
        stock: 30,
        description: '25g, Felfort'
    },
    {
        id: '5',
        name: 'Huevo Kinder',
        price: 2500,
        category: 'chocolates',
        img: 'https://acdn.mitiendanube.com/stores/323/592/products/huevo-kinder-rosa-a0453d22bd8705437c17163976602310-1024-1024.jpg',
        stock: 30,
        description: '20g, Kinder'
    },
    {
        id: '6',
        name: 'Kinder Bueno',
        price: 3100,
        category: 'chocolates',
        img: 'https://acdn.mitiendanube.com/stores/001/157/846/products/copia-de-diseno-sin-titulo-401-5ba0cea1317c04596616563378957744-640-0.png',
        stock: 30,
        description: '43g, Kinder'
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.category === productCategory))
        }, 500)
    })
}