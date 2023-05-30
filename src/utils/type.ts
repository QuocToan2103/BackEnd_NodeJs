export type createUserParams={
    username: string,
    email: string,
    password: string,
}
export type updateUserParams={
    username: string,
    email: string,
    password: string,
}
export type createUserProfileParams={ 
    firstname:string; 
    lastname:string;
    age :number;
    dob: string;
}
export type createUserPostsParams={
    title: string;
    description: string;
}