import os
from rembg import remove, new_session
from PIL import Image

session = new_session("silueta")

def remove_background(input_path, output_path):
    print(f"Processing {input_path}...")
    try:
        input_image = Image.open(input_path)
        output_image = remove(input_image, session=session)
        output_image.save(output_path)
        print(f"Saved to {output_path}")
    except Exception as e:
        print(f"Error processing {input_path}: {e}")

directory = r"C:\Users\LENOVO\Desktop\DELICIOUS_FOODS_PROJECT\public\images\hero"

for filename in os.listdir(directory):
    if filename.endswith(".png") or filename.endswith(".webp"):
        filepath = os.path.join(directory, filename)
        remove_background(filepath, filepath)

print("Done")
