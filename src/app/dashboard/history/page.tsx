import ProductHistory from "@/components/ProductHistory";

type Props = {
  customerKey: string | null;
};

export default function History() {
  const customerKey = "globex";

  if (!customerKey) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return (
    <div>
      <ProductHistory customerkey={customerKey} />
    </div>
  );
}
