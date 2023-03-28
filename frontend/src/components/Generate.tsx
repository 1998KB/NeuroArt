import React from 'react';
import "../stylesheets/Generate.css"
import Form from "./Form";
import ImageContainer from "./ImageContainer";

const Generate = () => {
    return (
        <div>
            <h1 className='heading'>Be Creative</h1>
            <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet animi assumenda dicta iusto nisi officiis placeat praesentium quasi sint. Corporis deleniti illo, inventore minima molestiae mollitia nemo quia sequi voluptatibus voluptatum! Aliquid commodi, distinctio fugiat itaque magni maiores minus molestiae neque nostrum officia perferendis possimus quae quam rem veniam. Amet aperiam atque beatae consectetur, cumque deleniti deserunt dignissimos dolorem dolores doloribus eligendi enim, eos est ex in ipsam ipsum laboriosam laborum minima mollitia nostrum odit placeat quas quibusdam quos tempora tempore vel velit voluptates voluptatum. At consequuntur dolor expedita explicabo hic itaque, iusto magnam neque, obcaecati saepe sunt tempora?</p>
            <Form/>
            <ImageContainer/>
        </div>
    );
};

export default Generate;
