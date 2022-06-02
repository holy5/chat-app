interface userReq {
  body: {
    email: string;
    password: string;
    username?: string;
    image?: string;
    userId?: string;
  };
}

interface ImageDataReq {
  body: {
    base64Image: string;
  };
}

export { userReq, ImageDataReq };
