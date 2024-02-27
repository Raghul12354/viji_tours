// import pool from "../db/db";

type DataTypes = {
    id: string;
    title: string;
    img: string;
    description: string;
    days: string;
    nights: string;
    location: string;
};

let TourData: DataTypes[] = [
    {
        id: '1',
        title: "Kerala, Wayanad Tour Package",
        img: "/hero/Test_bg.jpg",
        description: "Tour-1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, deserunt incidunt expedita facere accusantium perspiciatis earum, molestias sit voluptas eius vitae quidem, at officiis recusandae quod dolorum quibusdam doloribus asperiores!",
        nights: "4",
        days: "5",
        location: "kerala,wayanad",
    },
    {
        id: '2',
        title: "Goa Tour Package",
        img: "/hero/Test_bg.jpg",
        description: "Tour-2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, deserunt incidunt expedita facere accusantium perspiciatis earum, molestias sit voluptas eius vitae quidem, at officiis recusandae quod dolorum quibusdam doloribus asperiores!",
        nights: "2",
        days: "3",
        location: "Goa,India",
    },
    {
        id: '3',
        title: "Pondy Tour Package",
        img: "/hero/Test_bg.jpg",
        description: "Tour-3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, deserunt incidunt expedita facere accusantium perspiciatis earum, molestias sit voluptas eius vitae quidem, at officiis recusandae quod dolorum quibusdam doloribus asperiores!",
        nights: "5",
        days: "6",
        location: "pondy,India",
    },
    {
        id: '4',
        title: "Himalayas Tour Package",
        img: "/hero/Test_bg.jpg",
        description: "Tour-4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, deserunt incidunt expedita facere accusantium perspiciatis earum, molestias sit voluptas eius vitae quidem, at officiis recusandae quod dolorum quibusdam doloribus asperiores!",
        nights: "9",
        days: "10",
        location: "Himalayas,India",
    },
];

// Get method
export const getData = () => TourData

// Post Method
// export const postData = async (items: DataTypes) => {
//     try {
//         const { title, description, location } = items;
//         const query = 'INSERT INTO your_table_name (title, description, location) VALUES ($1, $2, $3)';
//         const values = [title, description, location];
//         await pool.query(query, values);
//     } catch (error) {
//         console.error('Error inserting data:', error);
//         throw error;
//     }
// };
// Delete Method
export const deleteData = (id: string) => {
    TourData = TourData.filter((arg) => arg.id !== id)
}

export const getById = (id: string) => {
    return TourData.find((items) => items.id === id)
}