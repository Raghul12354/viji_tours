// pages/api/bookings.js

export default async function handler(req: Request, res: Response) {
    if (req.method === 'POST') {
        try {
            // Here you can handle the form data sent from the client
            const formData = req.body;

            // For now, let's just log the form data
            console.log('Form data:', formData);

            // You can perform additional processing here,
            // such as saving the form data to a database or sending notifications

            // Send a success response

        } catch (error) {
            console.error('Error processing form submission:', error);

        }
    }

}
