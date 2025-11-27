import PyPDF2
import sys

def extract_text(pdf_path):
    print(f"--- Extracting text from {pdf_path} ---")
    try:
        with open(pdf_path, 'rb') as file:
            reader = PyPDF2.PdfReader(file)
            for page_num in range(len(reader.pages)):
                page = reader.pages[page_num]
                print(page.extract_text())
    except Exception as e:
        print(f"Error reading {pdf_path}: {e}")
    print(f"--- End of {pdf_path} ---\n")

if __name__ == "__main__":
    extract_text("PageSpeed Insights Desktop.pdf")
    extract_text("PageSpeed Insights Mobile.pdf")
