"use client";
import React, { useState } from "react";
import { Button, Card, CardBody, Form } from "reactstrap";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import { Discard, Post, PostEditTitle } from "@/Constant/constant";
import PostEditForm from "./PostEditForm";
import CommonFileUpload from "@/Components/BonusUi/Dropzone/Common/CommonFileUpload";

const PostEdit = () => {
  return (
    <Card>
      <CommonCardHeader headClass="pb-0" title={PostEditTitle} />
      <CardBody className="add-post">
        <PostEditForm />
        <Form className="m-b-20">
          <CommonFileUpload />
        </Form>
        <div className="btn-showcase text-end">
          <Button color="primary">{Post}</Button>
          <Button color="light">{Discard}</Button>
        </div>
      </CardBody>
    </Card>
  );
};
export default PostEdit;
