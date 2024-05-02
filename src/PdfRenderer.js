import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Font,
} from "@react-pdf/renderer";

import LMFont from "./fonts/Roboto-Regular.ttf";
Font.register({ family: "LM Sans", fontStyle: "normal", src: LMFont });

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    padding: "2cm",
    paddingLeft: "4cm",
    flexWrap: "wrap",
  },
  section: {
    width: "6.5cm",
    height: "2cm",
    borderWidth: "0.2mm",
    borderStyle: "solid",
    marginTop: "-0.2mm",
    marginLeft: "-0.2mm",
    padding: "2px",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  tt: {
    overflow: "hidden",
    fontFamily: "LM Sans",
  },
});

const sizeToFontSize = (size) => {
  return  size + "px";
};

const NavneskiltPdf = ({ names }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {names.map((it) => (
        <View key={it.id} style={styles.section}>
          <Text style={{...styles.tt, fontSize: sizeToFontSize(it.size)}}>{it.name}</Text>
        </View>
      ))}
    </Page>
  </Document>
);

function PdfRenderer({ names }) {
  return (
    <div>
      <PDFViewer style={{ width: "100%", height: "70vh" }}>
        <NavneskiltPdf names={names} />
      </PDFViewer>
    </div>
  );
}

export default PdfRenderer;
