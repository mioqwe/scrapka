import tempfile
import os
import sys
sys.path.insert(0, '.')
from google_maps_scraper import ExportManager, DataManager, BusinessData

print("Testing ExportManager...")
dm = DataManager()
item = BusinessData(name="Test Business", place_id="123", full_address="123 Street")
dm.add_item(item)
em = ExportManager(dm)

# Test CSV
with tempfile.NamedTemporaryFile(suffix='.csv', delete=False) as f:
    path = f.name
em.export_to_csv(path)
print(f"CSV exported: {os.path.getsize(path)} bytes")
os.unlink(path)

# Test XLSX
with tempfile.NamedTemporaryFile(suffix='.xlsx', delete=False) as f:
    path = f.name
em.export_to_xlsx(path)
print(f"XLSX exported: {os.path.getsize(path)} bytes")
os.unlink(path)

# Test JSON
with tempfile.NamedTemporaryFile(suffix='.json', delete=False) as f:
    path = f.name
em.export_to_json(path)
print(f"JSON exported: {os.path.getsize(path)} bytes")
os.unlink(path)

print("All exports successful!")
