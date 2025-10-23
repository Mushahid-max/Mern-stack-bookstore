export const saveOrderDetails = async (orderData) => {
    try {
      const response = await fetch("http://localhost:4002/api/orders/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || "Failed to save order.");
      }
  
      return data; // Order saved successfully
    } catch (error) {
      console.error("Error saving order:", error);
      throw error;
    }
  };
  