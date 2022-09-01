const serverResponse = (res, status = 200, message = 'OK') => {
    return res.status(status).json(message).end();
};


export default serverResponse;