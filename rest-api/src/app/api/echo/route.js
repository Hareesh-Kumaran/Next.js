import { NextRequest } from "next/server";
export async function GET(request) {

     const URL= new URL(request.url);
     console.log(URL);
     const {searchParams}=URL;
    //searchParams is in map data structure.  
    console.log(searchParams.get(id));
    

}
