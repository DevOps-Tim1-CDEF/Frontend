import moment from "moment";

export const baseUrl = "";
export const mainUrl = "http://localhost:2500/"

export const datetimeFormat = (datetime, format = "DD/MM/YYYY HH:mm") => {
  return new Date(datetime).getTime()+(2*86400000) < new Date().getTime()
         ? moment(datetime).format(format)
         : moment(datetime).fromNow()
                        
}