import React from "react";
// cards
import { parts } from "../parts/parts";
import _r1 from "../assets/images/rarity/_rarity_1.png";
import _r2 from "../assets/images/rarity/_rarity_2.png";
import _r3 from "../assets/images/rarity/_rarity_3.png";

const TokRenderer = ({ Tok = null, size = 200, style }) => {
  if (!Tok) {
    return null;
  }
  let rarity = _r1;

  if (Tok.rarity >= 80) {
    rarity = _r2;
  }
  if (Tok.rarity >= 95) {
    rarity = _r3;
  }

  let dnaStr = String(Tok.dna);

  while (dnaStr.length < 16) dnaStr = "0" + dnaStr;

  let TokDeatils = {
    bg: dnaStr.substring(0, 2) % 5,
    mask: dnaStr.substring(2, 4) % 5,
    line: dnaStr.substring(4, 6) % 5,
    addon: dnaStr.substring(6, 8) % 5,
    addonMouth1: dnaStr.substring(8, 10) % 5,
    addonMouth2: dnaStr.substring(10, 12) % 5,
    addonMouth3: dnaStr.substring(12, 14) % 5,
    name: Tok.name,
  };

  const TokStyle = {
    width: "100%",
    height: "100%",
    position: "absolute",
  };

  return (
    <div
      style={{
        minWidth: size,
        minHeight: size,
        background: "blue",
        position: "relative",
        ...style,
      }}
    >
      <img alt={"bg"} src={parts.bg[TokDeatils.bg]} style={TokStyle} />
      <img alt={"mask"} src={parts.mask[TokDeatils.mask]} style={TokStyle} />
      <img alt={"line"} src={parts.line[TokDeatils.line]} style={TokStyle} />
      <img alt={"addon"} src={parts.addon[TokDeatils.addon]} style={TokStyle} />
      <img
        alt={"addon_mouth"}
        src={parts.addonMouth1[TokDeatils.addonMouth1]}
        style={TokStyle}
      />
      <img
        alt={"addon_mouth"}
        src={parts.addonMouth2[TokDeatils.addonMouth2]}
        style={TokStyle}
      />
      <img
        alt={"addon_mouth"}
        src={parts.addonMouth3[TokDeatils.addonMouth3]}
        style={TokStyle}
      />
      <img alt={"rarity"} src={rarity} style={TokStyle} />
    </div>
  );
};

export default TokRenderer;
