import { ChangeEvent, Dispatch, SetStateAction } from "react";

import { ImageContainer } from "@/components/common/image-container";
import { ImageInput } from "@/components/common/image-input";
import { Input } from "@/components/common/input";

interface FormProps {
  nickname: string;
  setNickname: Dispatch<SetStateAction<string>>;
  image: string;
  changeImage: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const RequiredForm = ({
  nickname,
  setNickname,
  image,
  changeImage,
}: FormProps) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h4 className="text-h4 text-primary">닉네임 설정</h4>
        <Input
          placeholder="닉네임을 설정해주세요"
          limit={4}
          value={nickname}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setNickname(e.target.value)
          }
        />
      </div>
      <div className="flex flex-col gap-4">
        <h4 className="text-h4 text-primary">칭찬 반응 이미지</h4>
        {image.length > 0 ? (
          <ImageContainer src={image} onChange={changeImage} />
        ) : (
          <ImageInput onChange={changeImage} />
        )}
      </div>
    </>
  );
};