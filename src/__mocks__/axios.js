// ADD THE LINE BELLOW IN JSON file
// "jest": {
//     "resetMocks": false
//   },

const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: "James",
          last: "Serengia",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/59.jpg",
        },
        login: {
          username: "ThePhonyGOAT",
        },
      },
      {
        name: {
          first: "John",
          last: "Serengia",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/59.jpg",
        },
        login: {
          username: "ThePhonyGOAT",
        },
      },
    ],
  },
};

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
