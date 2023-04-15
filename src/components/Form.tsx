import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Form = () => {
  const schema = z.object({
    description: z
      .string()
      .min(1, { message: "Description should be at least 1 character." }),
    amount: z
      .number({ invalid_type_error: "Amount field is required" })
      .min(1, { message: "Amount should be atleast 1 character." }),
    category: z.string(),
  });

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    reset();
  };

  console.log(errors);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="description">Description</label>
          <input {...register("description")} id="description" type="text" />
          {errors.description && <p>{errors.description.message}</p>}
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <input
            {...register("amount", { valueAsNumber: true })}
            id="amount"
            type="number"
          />
          {errors.amount && <p>{errors.amount.message}</p>}
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <select {...register("category")} id="category">
            <option value="groceries">Groceries</option>
            <option value="utility">Utility</option>
            <option value="entertainment">Entertainment</option>
            <option value="clothes">Clothes</option>
            {errors.category && <p>{errors.category.message}</p>}
          </select>
        </div>
        <button disabled={!isValid} type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
