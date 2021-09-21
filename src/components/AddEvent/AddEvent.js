import React from 'react';
import { useForm } from "react-hook-form";
import {useState} from 'react';
import axios from "axios";

const AddEvent = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);
    console.log("img", imageURL)

    const onSubmit = data => {
        const eventData = {
            name: data.name,
            imageURL: imageURL
        };
        console.log("data", eventData);
        const url = `http://localhost:5000/addEvent`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => console.log("server site response successfully", res))
    };
    
    const handleImageUpload = event => {
        console.log(event.target.files);
        const imageData = new FormData();
        imageData.set('key', '400b38040e9dc25b9a48e040ad618446');
        imageData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            // console.log(response);
            // console.log(response.data.data.display_url)
            setImageURL(response.data.data.display_url)
          })
          .catch(function (error) {
            console.log(error);
          });
        
    };
    return (
        <div>
            <h1>Add your awesome events</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue="New exiting event" name="name" {...register("name")} />
                <br />
                <input type="file" onChange={handleImageUpload} />
                <br />

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddEvent;