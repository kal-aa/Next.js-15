import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Suspense } from "react";

export default function ProductReviews() {
  return (
    <>
      <Suspense fallback={<p>Loading Header details</p>}>
        <Header />
      </Suspense>
      <h1>Product Reviews</h1>
      <Suspense fallback={<p>Loading Footer details</p>}>
        <Footer />
      </Suspense>
    </>
  );
}
