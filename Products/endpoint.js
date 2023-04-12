const { ApolloServer, gql } = require('apollo-server');

const products = [
  new Product(
    'Paracetamol',
    'Paracetamol (acetaminophen) is a pain reliever and a fever reducer',
    '8HE902',
    300,
    'https://www.m-medix.com/2759-large_default/emzor-paracetamol-tablets.jpg'
  ),
  new Product(
    'Prednisolone',
    'Prednisolone is a corticosteroid (cortisone-like medicine or steroid). It works on the immune system to help relieve swelling, redness, itching, and allergic reactions',
    '8HE809',
    600,
    'https://5.imimg.com/data5/RU/SX/JJ/SELLER-109604861/prednisolone-tablet-500x500.jpg'
  ),
  new Product(
    'Lumefantrine',
    'Lumefantrine is an antimalarial agent used to treat acute uncomplicated malaria.',
    '8HE809',
    1200,
    'https://i1.wp.com/nimedhealth.com.ng/wp-content/uploads/2020/09/IMG_20200920_082326-1.jpg?fit=2487%2C1599&ssl=1'
  ),
  new Product(
    'Coflin',
    'Coflin Is Used To Treat Coughs And Congestion Caused By The Common Cold, Bronchitis, And Other Breathing Illnesses.',
    '8HE809',
    1200,
    'https://www.m-medix.com/2677-large_default/dr-meyers-coflin-expectorant-100ml.jpg'
  )
];

const typeDefs = gql`
  type Product {
    name: String
    description: String
    sku: String
    price: Float
    image: String
  }

  type Query {
    products: [Product]
  }
`;

const resolvers = {
  Query: {
    products: () => products,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
