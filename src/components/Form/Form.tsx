import { useState } from "react";
import { useForm } from "react-hook-form";
import * as Styled from "./styles";

type formDataType = {
  name: string;
  email: string;
  comment: string;
};

export default function Form({ _id }) {
  const [formData, setFormData] = useState<formDataType>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data: formDataType) => {
    setIsSubmitting(true);
    let response;
    setFormData(data);
    try {
      response = await fetch("/api/createComment", {
        method: "POST",
        body: JSON.stringify(data),
      });
      setIsSubmitting(false);
      setHasSubmitted(true);
    } catch (err) {
      setFormData(err);
    }
  };

  if (isSubmitting) {
    return <Styled.Text>Aguarde... Enviando seu comentário</Styled.Text>;
  }
  if (hasSubmitted) {
    return (
      <>
        <Styled.Text>
          Obrigado pelo comentário! Em breve ele aparecerá aqui
        </Styled.Text>
        <Styled.Text>
          Nome: {formData.name} <br />
          Email: {formData.email} <br />
          Comentário: {formData.comment}
        </Styled.Text>
      </>
    );
  }

  return (
    <>
      <Styled.Title>Deixe o seu comentário</Styled.Title>
      <Styled.Form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("_id")} type="hidden" name="_id" value={_id} />
        <Styled.Label>
          <Styled.LabelText>Nome</Styled.LabelText>
          <Styled.Input
            name="name"
            {...register("name", {
              required: true,
            })}
            placeholder="Qual seu nome?"
          />
        </Styled.Label>
        <Styled.Label>
          <Styled.LabelText>Email</Styled.LabelText>
          <Styled.Input
            name="email"
            type="email"
            {...register("email", {
              required: true,
            })}
            placeholder="Qual seu email?"
          />
          <Styled.HelperText>
            *Não se preocupe, não mostraremos seu email no site
          </Styled.HelperText>
        </Styled.Label>
        <Styled.Label>
          <Styled.LabelText>Comentário</Styled.LabelText>
          <Styled.TextArea
            {...register("comment", {
              required: true,
            })}
            name="comment"
            rows={8}
            placeholder="O que gostaria de nos falar?"
          ></Styled.TextArea>
        </Styled.Label>
        {/* errors will return when field validation fails  */}
        {/* {errors.exampleRequired && <span>This field is required</span>} */}
        <Styled.SubmitButton type="submit">Comentar</Styled.SubmitButton>
      </Styled.Form>
    </>
  );
}
