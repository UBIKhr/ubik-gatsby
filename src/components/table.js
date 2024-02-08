import * as React from "react";
import { useTranslation } from "react-i18next";

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["common"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

const Table = ({ data, headerBackgroundColor, borderColor }) => {
  const {t} = useTranslation();
 
  return (
    <div className="overflow-x-auto">
      <table className={`min-w-full border-collapse border-t-2 font-regular my-10 border-${borderColor}`}>
        <thead>
          <tr className={`border-b-2 border-${borderColor}`}>
            <th className={`py-2 px-4 bg-${headerBackgroundColor} text-white text-left font-light lg:text-base1 text-xs 2xl:text-md`} scope="col">{t("Amount in Dispute")}</th>
            <th className={`py-2 px-4 bg-${headerBackgroundColor} text-white text-left font-light lg:text-base1 text-xs 2xl:text-md`} scope="col">{t("Arbitrator's Fee")}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className={`border-b border-${borderColor}`}>
              <td className="py-2 px-4 text-tiny lg:text-xs 2xl:text-sm">{row.amount}</td>
              <td className="py-2 px-4 text-tiny lg:text-xs 2xl:text-sm">{row.fee}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
