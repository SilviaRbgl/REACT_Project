import React, { useContext, useEffect, useState } from "react";
import { db } from "../config";
import { AuthContext } from "../Context/AuthContext";
import {
  collection,
  getDocs,
  addDoc,
  query,
  where,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import { async } from "@firebase/util";

function DetailsMovieAuth() {
  const { user } = useContext(AuthContext);
  const [reviewsMsgs, setReviewsMsgs] = useState([]);
  const [review, setReview] = useState("");

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const getReviews = async () => {
    // try {
    //   const querySnapshot = await getDocs(collection(db, "Reviews"));
    //   const myMsgs = [];
    //   querySnapshot.forEach((doc) => {
    //     console.log(`${doc.id} => ${doc.data()}`);
    //     myMsgs.push(doc.data());
    //   });
    //   console.log("myMsgs>", myMsgs);
    //   setReviewsMsgs(myMsgs);
    // } catch (error) {
    //   console.log("error", error);
    // }

    const q = query(collection(db, "Reviews"), orderBy("date"));
    onSnapshot(q, (querySnapshot) => {
      const myMsgs = [];
      querySnapshot.forEach((doc) => {
        myMsgs.push(doc.data());
      });
      setReviewsMsgs(myMsgs);
      console.log("Reviews:", myMsgs);
    });
  };

  const msgDate = (date) => {
    return new Date(date * 1000).toLocaleString();
  };

  const handleMessageChange = (e) => {
    setReview(e.target.value);
  };

  const handleSubmit = async () => {
    console.log("review", review);
    try {
      const docRef = await addDoc(collection(db, "Reviews"), {
        text: review,
        date: new Date(),
        author: user.email,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <div>
      <div className="star-rating">
        <p>Your rating: </p>
        {[...Array(5)].map((index) => {
          index += 1;
          return (
            <>
              <button
                type="button"
                key={index}
                className={index <= (hover || rating) ? "on" : "off"}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
              >
                <span className="star">&#9733;</span>
              </button>
            </>
          );
        })}
      </div>

      <div className="Container-Comment" action="">
        <p>Review this movie:</p>
        <input
          type="text"
          value={review}
          placeholder="Review here"
          name="message"
          onChange={handleMessageChange}
          required
        />
        <label htmlFor="message"></label>
        <br></br>
        <button className="Button" type="submit" onClick={handleSubmit}>
          Submit review
        </button>
      </div>
      <p>Users reviews:</p>
      <div>
        {reviewsMsgs &&
          reviewsMsgs.map((msg, index) => {
            return (
              <div className="container-review" key={index}>
                <p>{msg.author} says:</p>
                <h4>"{msg.text}"</h4>
                <p>{msgDate(msg.date.seconds)}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default DetailsMovieAuth;
