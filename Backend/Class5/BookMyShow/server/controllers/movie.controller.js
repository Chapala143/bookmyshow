import Movie from "../models/movie.model.js";
import Theatre from "../models/theatre.model.js";

export const createMovie = async (req, res) => {
    // // Get user role
    // const role = req.user?.role;
    // console.log(role)
    // // If current role is allowed to create movie
    // const allowedUsers = ['ADMIN', 'SUPERADMIN'];
    // if (!allowedUsers.includes(role)) {
    //     return res.status(403).send('You are not authorized');
    // }
    //Modified 2
//    const movieData = req.body;
//    try{
//     const data = await Movie.create(movieData);
//     res.status(200).send(data);
//    } catch(e) {
//     res.status(500).send(e);
//    }

   // Modified 3
   const movieData = req.body;
   try{
         console.log('theatre1 > ', movieData.theatre);
    let theatre = await Theatre.findOne({ name: movieData.theatre?.name });
          console.log('theatre2 > ', theatre);
       if (!theatre) {
        theatre = await Theatre.create(movieData.theatre);
          }
       console.log('theatre3 > ', theatre);
    const data = await Movie.create({ ...movieData, theatre: theatre._id });
     res.status(200).send(data);
      } catch(e) {
        res.status(500).send(e);
       }
}

export const getMovies = async (req, res) => {
    // const type = req.query.type; // All, UPCOMING, LIVE.
    // console.log(type);
    // const queryFilter = { releaseDate: { $gte: '2023-10-14' } };
    // gte greater than or equal
    //    const queryFilter = { releaseDate: { $lte: '2023-10-14' } };
    // lte = less than or equal

    // try {
    // find() = you will get all the movies.
    //     const data = await Movie.find(queryFilter);
    //     res.status(200).send(data);
    // } catch(e) {
    //     res.status(500).send(e);
    // }

    // const queryFilter = { }; // All
    // const queryFilter = { releaseDate: { $gt: new Date() } }; // upcoming
    // const queryFilter = { releaseDate: { $lte: new Date() } }; // Live

    
    // Modified 2 
    // const type = req.query.type; // All, coming, live.
    // let queryFilter = {};

    // switch(type) {
    //     case 'ALL': {
    //         break;
    //     }
    //     case 'UPCOMING': {
    //         queryFilter = { releaseDate: { $gt: new Date() } }; //UPCOMING
    //         break;
    //     }
    //     case  'LIVE': {
    //         queryFilter = { releaseDate: { $lte: new Date() } }; //LIVE
    //         break;
    //     }
    //     default:
    //         break;
    // }

    // try {
    //     const data = await Movie.find(queryFilter);
    //     res.status(200).send(data);
    // } catch(e) {
    //     res.status(500).send(e);
    // }

    // Modified 3
    const type = req.query.type; // ALL, UPCOMING, LIVE
    const title = req.query.title;
    let queryFilter = {};
    if (title) {
        queryFilter.title = new RegExp(title, 'g');
    }
    switch(type) {
        case 'ALL': {
            break;
        }
        case 'UPCOMING': {
            queryFilter.releaseDate = { $gt: new Date() } ; //UPCOMING
            break;
        }
        case  'LIVE': {
            queryFilter.releaseDate = { $lte: new Date() } ; //LIVE
            break;
        }
        default:
            break;
    }
   
    try {
        const data = await Movie.find(queryFilter).populate('theatre');
        // const data = await Movie.find(queryFilter).limit(2);
        res.status(200).send(data);
    } catch(e) {
        res.status(500).send(e);
    }
}



 
 // new Date = Today's date.
 // http://localhost:5050/api/movie/list?type=ALL&title=Mission&page=1 (pagination)
