const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlZWQxNWJkNWQxMjAwMTg5MGQzNDEiLCJpYXQiOjE3MDU5NjI3NzMsImV4cCI6MTcwNzE3MjM3M30.3sWRRW1GrjoPDoE6wldlCMnKTc_3zNdr9OnKfLE72RQ";

export const fetchProductPost = async (url, data) => {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(data),
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};

export const fetchProductGet = async (url) => {
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    return await response.json();
  } catch (e) {
    console.error("Si è verificato un errore:", e);
  }
};
export const fetchProductDelete = async (url) => {
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  } catch (e) {
    console.log("Errore: ", e);
  }
};
export const fetchProductPut = async (url, data) => {
  const response = await fetch(url, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};
