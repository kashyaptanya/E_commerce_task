import { baseUrl } from "../../Constant/Url";
import { apiService } from "../../Services/api";
import { myLogger } from "../../Utils/const";
import { store } from "../../store";


export const apiCallFun = ({ url, method = 'POST', data, hasFile = false, callBackData = () => { }, dispatchType = null }) => async (dispatch) => {
    const adminToken = store?.getState()?.common?.jwtToken?.payload;
    let config = {
      method: method,
      url: `${baseUrl}${url}`,
      headers: {
        "Authorization": adminToken ? `Bearer ${adminToken}` : null,
        "Content-Type": hasFile ? "multipart/form-data" : "application/json",
      },
    };
    if (data) {
      config.data = data
    }
  
    if (!navigator.onLine) {
      return { internetIssue: true, message: "No Active Internet Connection" };
    } else {
      let response = await apiService(config, dispatch);
      try {
        if (response?.status === 411 || response?.status === 410) {
          callBackData(response);
        } else {
          if (response?.status == 200) {
            if (dispatchType) {
                myLogger("dispatchType",dispatchType);
              dispatch({ type: dispatchType, payload: response?.data })
            }
          }
          callBackData(response?.data);
        }
      } catch (error) {
        myLogger("Error", error)
        callBackData(response?.data);
      }
    }
  };
  